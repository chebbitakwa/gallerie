import React, {Component}  from 'react';
import Video from './video'
let vd =[
  {url:"https://www.youtube.com/embed/i0_0LZjI2Ic",title:"RAID/ESSTED-2015",description:"Premier Trailer RAID-Essted 2015"},
  {url:"https://www.youtube.com/embed/i0_0LZjI2Ic",title:"RAID/ESSTED-2015",description:"Premier Trailer RAID-Essted 2015"},
  {url:"https://www.youtube.com/embed/i0_0LZjI2Ic",title:"RAID/ESSTED-2016",description:"Premier Trailer RAID-Essted 2016"},
  {url:"https://www.youtube.com/embed/i0_0LZjI2Ic",title:"RAID/ESSTED-2016",description:"Premier Trailer RAID-Essted 2016"},
  {url:"https://www.youtube.com/embed/i0_0LZjI2Ic",title:"RAID/ESSTED-2017",description:"Premier Trailer RAID-Essted 2017"},
  {url:"https://www.youtube.com/embed/i0_0LZjI2Ic",title:"RAID/ESSTED-2017",description:"Premier Trailer RAID-Essted 2017"},
]
class Videos extends Component {
    render() {
      return (
        <div className="video">
  {
      vd.map((el)=><Video element={el}/>)
  }


        </div>
      );
    }
  }
  
  export default Videos ;