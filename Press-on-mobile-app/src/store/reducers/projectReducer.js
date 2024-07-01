import { ActionTypes } from '../../constants/ActionTypes';

const initialState = {
  projects: [],
  error: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        projects: [],
        error: action.payload,
      };
    case ActionTypes.UPDATE_PROJECT_SUCCESS:
      const updatedProjects = state.projects.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
      return {
        ...state,
        projects: updatedProjects,
        error: null,
      };
    case ActionTypes.UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        error: null,
      };
    case ActionTypes.ADD_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.DELETE_PROJECT_SUCCESS:
      const filteredProjects = state.projects.filter(
        (project) => project.id !== action.payload
      );
      return {
        ...state,
        projects: filteredProjects,
        error: null,
      };
    case ActionTypes.DELETE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;