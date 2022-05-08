import React, { useState } from 'react'
import TabContent from './TabContent';

const Tab = (props) => {
    const [currentTab, setCurrentTab] = useState("");

    const newContent = (e) => {
      setCurrentTab(e.target.value)
    }
  return (
    <div>
        {props.tabs.map((element, i)=> { return(
            <button key={i} onClick={newContent} value={element}>Tab {element}</button>
        )
        })
        }
        <TabContent current={currentTab}/>
    </div>
  )
}

export default Tab
