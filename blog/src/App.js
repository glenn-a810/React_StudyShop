import './App.css'
import { useState } from 'react'

function App() {
  let [title, titleEdit] = useState(['React state', 'Vue state', 'Dart?'])
  let [like, likeEdit] = useState([0, 0, 0])
  let [modal, modalEdit] = useState(false)
  let [selectTitle, selectTitleEdit] = useState(0)
  // const posts = 'React vs Vue';

  // const titleChange = () => {
  //   let newArray = [...title]
  //   newArray[0] = '바뀌나?'
  //   titleEdit(newArray)
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>

      {title.map((key,id) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                // modal === false ? modalEdit(true) : modalEdit(false)
                selectTitleEdit(id)
              }}
            >
              {key}
            </h3>
            <p>1월 15일 발행</p>
            <hr />
          </div>
        )
      })}

      <button
        onClick={() => {
          modal === false ? modalEdit(true) : modalEdit(false)
        }}
      >
        Modal
      </button>

      {modal === true ? <Modal title={title} selectTitle={selectTitle} /> : null}

      {/*/!*<Modal />*!/*/}
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.selectTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
