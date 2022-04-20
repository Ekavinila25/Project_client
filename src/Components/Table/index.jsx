import React from 'react';
import './style.scss';

export default function Table(props) {
  const { data, column, parent } = props;

  console.log("column", column);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"><input type="checkbox" /></th>
          {column.map(columnData => 
            <>
              {console.log("columnData>>>>>>>>>>", columnData)}
              {!columnData.hidden && <th scope="col" key={columnData.displayName}>{columnData.displayName}</th>}
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((dataData, index) => 
          <tr key={(dataData)} className="c-pointer" onClick={() => parent !== 'product' && props.history.push(`contacts/${dataData.id}`)}>
            <th scope="row"><input type="checkbox" onClick={(e) => {e.stopPropagation()}} /></th>
            {column.map(columnData => 
              <>
                {!columnData.hidden && <td key={columnData.displayName}> 
                  {!(columnData.name === 'email' || columnData.name === 'createdBy') && <span>{dataData[columnData.name]}</span>}
                  {(columnData.name === 'email' || columnData.name === 'createdBy') && <a className="anchor-tag" href={`mailto:${dataData[columnData.name]}`}>{dataData[columnData.name]}</a>}
                </td>}
              </>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}
