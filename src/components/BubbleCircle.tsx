import * as React from 'react'
import styles from '../style/bubblecircle.module.css'

 const BubbleCircleComponent = function({text}: {text: string}){

  return <div className={styles.bul}>
    {text}
  </div>
}
export default BubbleCircleComponent
