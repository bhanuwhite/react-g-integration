import React, {useState, useEffect} from "react";
import { gapi } from "gapi-script";

const GoogleAouth = () => {
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
  ];
  const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] = useState()
  const [documents, setDocuments] = useState()
  const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false)
  const [listDocumentsVisibility, setListDocumentsVisibility] = useState(false)

 const [signedInUser, setSignedInUser] = useState()
  const listFiles = (searchTerm = null) => {
    setIsFetchingGoogleDriveFiles(true);
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
        q: searchTerm,
      })
      .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        console.log(response,'response files')
        setDocuments(res.files);
      });
  };
  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };
  const updateSigninStatus = (isSignedIn) => {
    console.log(isSignedIn,gapi.auth2.getAuthInstance())
    if (isSignedIn) {
      // Set the signed in user


      gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
        q: undefined,
      })
      .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        console.log(response,'response files')
        setDocuments(res.files);
      }).catch((err) => {
        console.log(err,'err')
      })





      console.log(gapi.auth2.getAuthInstance())
     
      listFiles();
    } else {
      // prompt user to sign in
      handleAuthClick();
    }
  };

  const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
  const initClient = () => {
 
    console.log('init')
    gapi && gapi.client
      .init({
        apiKey: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY,
        clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      .then(
        function (res) {
          console.log("callres", res)
         
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            
        
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {
          console.log("error", error);
        }
      );
  };

  useEffect(() => {
    console.log(gapi)
    gapi.load("client:auth2", initClient)
   
  }, [])
  

  const handleLogout = (event) => {
    
    gapi.auth2.getAuthInstance().signOut();
  };
  return (
  <div>
    <button onClick={() => handleLogout()}>Logout</button>;

    <button onClick={() => handleAuthClick()}>Api</button>;
    </div>
  )
};

export default GoogleAouth;
