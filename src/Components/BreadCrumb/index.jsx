import React from 'react';
import './style.scss';

const BreadCrumb = (props) => (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb p-0">
          {props.crumData.map(crumb =>
            <>
              {crumb.route ? 
                <li class="breadcrumb-item c-pointer">
                  <span onClick={() => props.history.push(crumb.route)}>
                    {crumb.title}
                  </span>
                </li>
                :
                <li class="breadcrumb-item active" aria-current="page">{crumb.title}</li>
              }
            </>
          )}
        </ol>
      </nav>
);

export default BreadCrumb
