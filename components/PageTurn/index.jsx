import React, { useState, useEffect } from 'react';

const PageTurn = (props) => {

    const [page, setPage] = useState(0);
    const pageItem = (props.pageItem+1);
    const cb = props.cb;

    useEffect((props) => {
      if ((pageItem % 40 ) == 0 && (pageItem-1) !== 0){
            cb((pageItem/40)+1)
        };
    })
  
    // return (
    //   <>
    //     PageTurner {page} - {JSON.stringify(props)} - {((props.pageItem+1) % 40)}
    //   </>
    // )

    return <></>
  }

export default React.memo(PageTurn);
