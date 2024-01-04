
import './App.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import * as ClassicEditor from './build/ckeditor.js';

function App() {
  return (
    <div className="App">
      <CKEditor 
        editor={ClassicEditor}
        data="<p>Hello World</p>"
        onReady={editor => {
          console.log("Editor Initialized : ", editor);
          editor.config.plugins
        }}
        />
    </div>
  );
}

export default App;
