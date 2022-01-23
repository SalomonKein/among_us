import { StatusBar } from "react-native"

export const APP_CONTAINER = {
    flex: 1,
    backgroundColor: '#E6E6FA',
    marginTop: StatusBar.currentHeight || 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
}
export const APP_FORM_CONTAINER ={
    width: '100%',
    height: '50vh',
    padding: '20px',
    marginTop: '2vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '20px',
  }
  export const BUTTON_COLOR_CONFIRM = '#22b44b'
  export const BUTTON_COLOR_DELETE = 'red'
  export const HEADER_CONTAINER= {
    backgroundColor: '#22b44b',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  export const HEADER_TEXT_CONTAINER= {
    paddingTop: '10px',
    paddingBottom: '10px',
  }
  export const HEADER_TEXT= {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  }
  export const TODO_ITEM_CONTAINER= {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#E6E6FA',
  }
  export const TODO_ITEM= {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
  export const TODO_ITEM_TITLE= {
    fontSize: 15,
    marginBottom: 5,
  }
  export const TODO_ITEM_TITLE_THROW= {
    textDecorationLine: "line-through",
    marginBottom: 5,
  }
  export const TODO_ITEM_CONTENT_CONTAINER= {
    width: "60vw",
  }
  export const TODO_ITEM_CONTENT= {
    backgroundColor: "white",
    padding: 10,
    height: 50,
  }
  export const TODO_ITEM_BUTTON_CONTAINER= {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 10,
  }
  export const TODO_ITEM_BUTTON= {
    margin: "5px",
  }
  export const TODO_TEXT_STYLE = {
    color: 'blue',
    fontSize: 20,
  }
  export const MAIN_TEXT_CONTAINER = {
    height: '30vh',   
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-around',
    marginTop: 40,
  }
  export const TODO_LIST_CREATE_CONTAINER_TEXT= {
    width: '200px',
    fontSize: 20,
    border: 'solid grey 1px',
    borderRadius: 5,
    alignSelf: 'center',
    textAlign:'center',
  }
  export const BUTTON_WRAPPER={
    width: '150px',
    alignSelf: 'center',
    marginTop: 30,
  }