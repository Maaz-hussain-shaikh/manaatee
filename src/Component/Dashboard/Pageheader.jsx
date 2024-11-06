import React from 'react';

const PageHeader = (props) => {
  return (
    <div className="page-header  p-3">
      <h3 className="font-bold text-2xl mb-4">{props.name}</h3>
      <ul className="breadcrumbs flex items-center space-x-2 text-gray-600">
        <li className="nav-home">
          <a href="/" className="text-blue-500">
          <i className="fa-solid fa-house text-gray-400 hover:text-blue-500"></i>
          </a>
        </li>
        <li className="separator">
        <i className="fa-solid fa-chevron-right ml-2"></i>
        </li>
        <li className="nav-item">
          <a href="/" className="text-gray-600 hover:text-blue-500 ml-2">{props.path}</a>
        </li>
        <li className="separator">
        <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li className="nav-item">
          <a href="/" className="text-gray-600 hover:text-blue-500 ml-2">{props.path2}</a>
        </li>
        
      </ul>
      
    </div>
  );
};

export default PageHeader;
