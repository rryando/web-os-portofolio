import React, {useState, useEffect, useContext} from 'react'
import PropTypes from "prop-types";
import { SearchOutlined, PoweroffOutlined } from '@ant-design/icons';
import { DesktopContext } from '../context/desktopContext';

const ToolbarLayout = ({children}) => {
  const {desktopData} = useContext(DesktopContext)
  const [currentTime, setCurrentTime] = useState(new Date())
  const formatDate = (dateObj) => {
    const formatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }

    return dateObj.toLocaleTimeString('en-gb', formatOptions)
  }
  const updateTime = () => {
    setInterval(() => {
      console.log('updating time..')
      setCurrentTime(new Date())
    }, 30000)
  }

  useEffect(() => updateTime(), [])

  return ( 
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <div className={`h-6 inset-x-0 top-0 flex toolbar-bg ${desktopData.themeClass}`}>
        <div className={`toolbar-content font-semibold text-left flex-1 px-1 ${desktopData.themeClass}`}>
          <SearchOutlined className="px-1 text-center align-middle"/> Application
        </div>
        <div className={`toolbar-content font-semibold capitalize text-center flex-1 px-2 ${desktopData.themeClass}`}>{formatDate(currentTime)}</div>
        <div className={`toolbar-content font-semibold text-right align-middle flex-1 px-2 ${desktopData.themeClass}`}>
          <PoweroffOutlined className="align-middle" />
        </div>
      </div>
      {children}
    </div>
   );
}
 
ToolbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolbarLayout;