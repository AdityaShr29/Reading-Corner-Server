import React, { useState } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

function BlogEditor(){
    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

    return(
        <div>
            <div style={{ width: 800, height: 300 }}>
                <div ref={quillRef} />
            </div>
        </div>
    );
}
export default BlogEditor;



// import { useState, useRef } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import React from 'react';

// function BlogEditor() {
//   const [content, setContent] = useState('');
//   const quillRef = useRef();

//   const modules = {
//     toolbar: {
//       container: [
//         [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//         [{ 'size': [] }],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//         ['link', 'image'],
//         ['clean']
//       ],
//       handlers: {
//         'image': handleImageInsert
//       }
//     }
//   };

//   const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image'
//   ];

//   function handleImageInsert() {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();
//     input.onchange = () => {
//       const file = input.files[0];
//       const formData = new FormData();
//       formData.append('image', file);
//       // Upload image to server and get URL
//       const imageUrl = 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg';
//       const range = quillRef.current.getEditor().getSelection();
//       quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl, Quill.sources.USER);
//     };
//   }

//   return (
//     <ReactQuill
//       value={content}
//       modules={modules}
//       formats={formats}
//       onChange={(content, delta, source, editor) => {
//         setContent(content);
//       }}
//       ref={quillRef}
//     />
//   );
// }

// export default BlogEditor;
