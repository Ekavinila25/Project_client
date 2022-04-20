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
              {columnData.visible && <th scope="col" key={columnData.columnTitle}>{columnData.columnTitle}</th>}
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
                {columnData.visible && <td key={columnData.columnTitle}> 
                  {!(columnData.field === 'email' || columnData.field === 'createdBy') && <span>{dataData[columnData.field]}</span>}
                  {(columnData.field === 'email' || columnData.field === 'createdBy') && <a className="anchor-tag" href={`mailto:${dataData[columnData.field]}`}>{dataData[columnData.field]}</a>}
                </td>}
              </>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}
