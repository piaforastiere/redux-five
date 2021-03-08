
import { db } from '../firebase'

const initialState = {
    questions: null,
    notes: null,
    gameInfo: null,
    loading: false,
    error: null, 
}

const LOADING = 'LOADING'
const GET_RESUME = 'GET_RESUME'
const GET_ERROR = 'GET_ERROR'

export default function resumeReducer(state = initialState, action){
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true}
        case GET_ERROR:
            return {  ...state, error: action.payload, loading: false}
        case GET_RESUME:
            return { ...state, gameInfo: action.payload.gameInfo, questions: action.payload.questions, notes: action.payload.notes, loading: false}
        default:
            return state
    }
}


export const getGameResume = (password) => async(dispatch) => {
    dispatch({
        type: LOADING
    })

    if (localStorage.getItem(password+'-resume') ) {
        dispatch({
            type: GET_RESUME,
            payload: JSON.parse(localStorage.getItem(password+'-resume'))
        })
    }

    try {
       
        const notes = []
        const questions = []
        const gameDB =  await db.collection('new-games').doc(password).get()
        const gameDBNotes =  await db.collection('new-games').doc(password).collection('notes').orderBy('timestamp', 'desc').get()
        const gameDBQuestions =  await db.collection('new-games').doc(password).collection('selected-questions').orderBy('timestamp', 'desc').get()
        
        gameDBNotes.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            notes.push(doc.data())
        });
        gameDBQuestions.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            questions.push(doc.data())
        });

        
        if (gameDB.exists && !gameDBNotes.empty && !gameDBQuestions.empty) {
            const data = {
                gameInfo: gameDB.data(),
                notes: notes,
                questions: questions
            }

            dispatch({
                type: GET_RESUME,
                payload: data
            })
            localStorage.setItem(password+'-resume', JSON.stringify(data))
        } else {
            dispatch({
                type: GET_ERROR,
                payload: 'Ops! There was an error, please try again later'
            })
        }

        
        
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error.message
        })
    }
}