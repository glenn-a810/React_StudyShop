import './App.css'
import React, { useState } from 'react'

function App() {
  let [title, titleEdit] = useState(['React state', 'Vue state', 'Dart?'])
  let [like, likeEdit] = useState([0, 0, 0])
  let [modal, modalEdit] = useState(false)
  let [selectTitle, selectTitleEdit] = useState(0)
  let [inputValue, inputValueEdit] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>

      {title.map((key, id) => {
        return (
          <div className="list" key={id}>
            <h3
              onClick={() => {
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

      {/*<input onChange={(e)=>{inputValueEdit(e.target.value)}} />*/}

      <button
        onClick={() => {
          modal === false ? modalEdit(true) : modalEdit(false)
        }}
      >
        Modal
      </button>

      <Profile />

      {modal === true ? (
        <Modal title={title} selectTitle={selectTitle} />
      ) : null}
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

class Profile extends React.Component {
  constructor() {
    super()
    this.state = { name: '루이', age: 11 }
  }

  changeName() {
    this.setState({ name: '오드' })
  }

  render() {
    return (
      <div>
        <h3>냥놈1호 : {this.state.name}</h3>
        <button
          onClick={() => {
            this.changeName()
          }}
        >
          버튼이벤트
        </button>
      </div>
    )
  }
}

export default App
