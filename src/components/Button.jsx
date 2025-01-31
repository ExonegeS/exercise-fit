import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
    <button onClick={func} className="mx-auto px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 boder-solid blueShadow duration-200">
        <p>{text}</p>
    </button>
  )
}
