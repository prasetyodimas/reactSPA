import React from 'react';

const installationCode =
` First you can clone github at bellow 
 - git clone https://github.com/Vladmir123/reactSPA.git
 - cd reactSPA
 - npm install  ** Dont Forget Installing your dependecy ex Node Modules :)
 - npm start / npm run start
`;

const Installation = () => (
  <div className="docs-installation">
    <p>Run the following commands in your terminal</p>
    <pre>
      <code className="bash">
        { installationCode }
      </code>
    </pre>
  </div>
);

export default Installation;
