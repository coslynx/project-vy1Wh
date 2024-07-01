import { ActionTypes } from '../../constants/ActionTypes';
import { ProjectService } from '../services/ProjectService';

export const fetchProjectDetails = () => {
    return async (dispatch) => {
        try {
            const projectDetails = await ProjectService.getProjectDetails();
            dispatch({ type: ActionTypes.FETCH_PROJECT_DETAILS_SUCCESS, payload: projectDetails });
        } catch (error) {
            dispatch({ type: ActionTypes.FETCH_PROJECT_DETAILS_FAILURE, payload: error.message });
        }
    };
};

export const editProjectDetails = (updatedDetails) => {
    return async (dispatch) => {
        try {
            await ProjectService.updateProjectDetails(updatedDetails);
            dispatch({ type: ActionTypes.EDIT_PROJECT_DETAILS_SUCCESS, payload: updatedDetails });
        } catch (error) {
            dispatch({ type: ActionTypes.EDIT_PROJECT_DETAILS_FAILURE, payload: error.message });
        }
    };
};

export const saveProjectChanges = (updatedDetails) => {
    return async (dispatch) => {
        try {
            await ProjectService.saveChanges(updatedDetails);
            dispatch({ type: ActionTypes.SAVE_PROJECT_CHANGES_SUCCESS, payload: updatedDetails });
        } catch (error) {
            dispatch({ type: ActionTypes.SAVE_PROJECT_CHANGES_FAILURE, payload: error.message });
        }
    };
};

export const trackRevisionHistory = (projectId) => {
    return async (dispatch) => {
        try {
            const revisionHistory = await ProjectService.getRevisionHistory(projectId);
            dispatch({ type: ActionTypes.TRACK_REVISION_HISTORY_SUCCESS, payload: revisionHistory });
        } catch (error) {
            dispatch({ type: ActionTypes.TRACK_REVISION_HISTORY_FAILURE, payload: error.message });
        }
    };
};

export const searchProjects = (searchQuery) => {
    return async (dispatch) => {
        try {
            const searchResults = await ProjectService.searchProjects(searchQuery);
            dispatch({ type: ActionTypes.SEARCH_PROJECTS_SUCCESS, payload: searchResults });
        } catch (error) {
            dispatch({ type: ActionTypes.SEARCH_PROJECTS_FAILURE, payload: error.message });
        }
    };
};

export const uploadProjectFiles = (projectId, files) => {
    return async (dispatch) => {
        try {
            await ProjectService.uploadFiles(projectId, files);
            dispatch({ type: ActionTypes.UPLOAD_PROJECT_FILES_SUCCESS });
        } catch (error) {
            dispatch({ type: ActionTypes.UPLOAD_PROJECT_FILES_FAILURE, payload: error.message });
        }
    };
};

export const sendFeedback = (feedback) => {
    return async (dispatch) => {
        try {
            await ProjectService.sendFeedback(feedback);
            dispatch({ type: ActionTypes.SEND_FEEDBACK_SUCCESS });
        } catch (error) {
            dispatch({ type: ActionTypes.SEND_FEEDBACK_FAILURE, payload: error.message });
        }
    };
};

export const setTheme = (theme) => {
    return { type: ActionTypes.SET_THEME, payload: theme };
};

export const showTutorial = () => {
    return { type: ActionTypes.SHOW_TUTORIAL };
};