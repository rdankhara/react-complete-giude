1.use coommand nmp install create-react-app -g (to install react create app command line tool)
2. go to directory you want to create application and use command create-react-app applicationName command to create new application

-- render something on dom conditionally use below turnary operator in {}
{ booleanCondition ? element to render : element to render on false condition or null }

To modularise css use steps below
1. from terminal hit command npm run eject
2. add css options { modules : true, localIdentName : '[name]__[local]__[hash:base64:5]}

WrappedComponent will need pass props using {...props} syntext check withClass.js

To force prop types install package using npm install prop-types --save
