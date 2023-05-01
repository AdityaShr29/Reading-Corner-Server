"use strict";(self.webpackChunkbookshelf_3=self.webpackChunkbookshelf_3||[]).push([[377],{1792:function(r,n,o){var i=o(8081),e=o.n(i),t=o(3645),d=o.n(t)()(e());d.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);"]),d.push([r.id,"*,\r\nh1,\r\np,\r\ndiv{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    font-family: 'Noto Sans', sans-serif;\r\n}\r\n\r\n.blog-container{\r\n    padding-inline : 3%;\r\n    padding-block : 1.5%;\r\n}\r\n\r\n.post-blog-container{\r\n    padding-block: 5%;\r\n    padding-inline: 7%;\r\n    background-color: rgb(193, 236, 245);\r\n    height: 100%;\r\n}\r\n\r\n.blog-post-form-sub-container{\r\n    border: 2px solid white;\r\n    border-radius: 4px;\r\n    background-color: rgb(244, 252, 254);\r\n\r\n    padding-block: 2vw;\r\n    padding-inline: 4vw;\r\n\r\n    -webkit-box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n    -moz-box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n    box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n\r\n}\r\n\r\n.form-inputs-container{\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr 1fr;\r\n    row-gap: 20px;\r\n    column-gap: 40px;\r\n}\r\n\r\n.blog-title,\r\n.blog-image-input,\r\n.blog-date-input,\r\n.quill{\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    background-color: rgba(219, 240, 244, 0.649);\r\n    border-radius: 2px;\r\n    display: block;\r\n    margin-block-end: 20px;\r\n    padding-block: 4px;\r\n    padding-inline: 10px;\r\n\r\n    text-align: left;\r\n\r\n    border: none;\r\n}\r\n\r\n.blog-title:focus,\r\n.blog-image-input:focus,\r\n.blog-date-input:focus{\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.quill{\r\n    height: 60vh;\r\n    background-color: whitesmoke;\r\n    border-bottom-left-radius: 12px;\r\n    border-bottom-right-radius: 12px;\r\n}\r\n\r\n.blog-image-container{\r\n    position: relative;\r\n    width: 27vw;\r\n    aspect-ratio: 1 / 0.6;\r\n    margin-block: 2vw;\r\n    margin-inline: 32%;\r\n    text-align: center;\r\n\r\n    border: none;\r\n    border-radius: 2px;\r\n    background-color: rgba(219, 240, 244, 0.649);\r\n}\r\n\r\n.blog-image-container::before{\r\n    content: \"Your Blog Image\";\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.blog-preview-image{\r\n    width: 100%;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n\r\n.blog-body-textarea{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.blog-submit-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    display: block;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 5vw;\r\n    padding-block: 0.5vw;\r\n    margin-top: 5vw;\r\n\r\n    position: relative;\r\n    left: 47%;\r\n\r\n    transition: all 0.5s;\r\n    -webkit-box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n    -moz-box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n    box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n}\r\n\r\n.blog-submit-btn:hover{\r\n    background-color: rgb(75, 75, 75);\r\n    color: rgb(255, 255, 255);\r\n\r\n    border: 1px solid rgb(75, 75, 75);\r\n}\r\n\r\n/* ********************************************* */\r\n\r\n.loader{\r\n    position: absolute;\r\n    left: 48%;\r\n    top: 50%;\r\n}\r\n\r\n.error{\r\n    position: absolute;\r\n    left: 43%;\r\n    top: 50%;\r\n}\r\n\r\n.arpit-blogs-heading{\r\n    font-size: 4vw;\r\n    font-weight: bolder;\r\n}\r\n\r\n.add-blogs-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    display: block;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 5vw;\r\n    padding-block: 0.5vw;\r\n    margin-block-start: 1.5%;\r\n\r\n    width: 20%;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.add-blogs-btn:hover{\r\n    background-color: rgb(65, 65, 65);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.blogs-grid-container{\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    grid-column-gap: 30px;\r\n    grid-row-gap: 3vw;\r\n\r\n    padding-block: 2vw;\r\n}\r\n\r\n.first-blog-container{\r\n    \r\n    grid-column-start: 1;\r\n    grid-column-end: 4;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    border-radius: 10px;\r\n    \r\n    transition: all 0.3s;\r\n}\r\n\r\n.first-blog-sub-container{\r\n    \r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-block-end: 2vw;\r\n    \r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    border-radius: 10px;\r\n    \r\n    transition: all 0.3s;\r\n}\r\n\r\n.first-blog-container:hover{\r\n    box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    -webkit-box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    border-radius: 4px;\r\n\r\n    transform: translate(3px, -3px);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.first-blog-img{\r\n    width: 40%;\r\n    aspect-ratio: 1.7 / 1;\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.first-blog-content{\r\n    padding-inline: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n\r\n    color: rgb(41, 41, 41);\r\n}\r\n\r\n.first-blog-content > div{\r\n    font-size: 2vw;\r\n    font-weight: bold;\r\n\r\n    text-decoration: underline;\r\n}\r\n\r\n.blog-card-summary{\r\n    border-top: 1px dotted black;\r\n    border-bottom: 1px dotted black;\r\n    padding: 10px;\r\n\r\n    font-size: 1vw;\r\n}\r\n\r\n.open-first-blog-button{\r\n    width: 50%;\r\n\r\n    font-size: 1.1vw;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-block: 0.5vw;\r\n\r\n    text-decoration: none;\r\n    text-align: center;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.open-first-blog-button:hover{\r\n    background-color: rgb(65, 65, 65);\r\n    color: rgb(255, 255, 255);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.blog-cards{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n\r\n    border: 1px double rgb(36, 36, 36);\r\n    padding: 8px;\r\n\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    border-radius: 5px;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n.blog-cards:hover{\r\n    box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    -webkit-box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n\r\n    transform: translate(3px, -3px);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.blog-img{\r\n    width: 100%;\r\n    aspect-ratio: 1.7 / 1;\r\n    object-fit: contain;\r\n\r\n    -webkit-border-top-left-radius: 15px;\r\n    -webkit-border-top-right-radius: 15px;\r\n    -moz-border-radius-topleft: 15px;\r\n    -moz-border-radius-topright: 15px;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n}\r\n\r\n.blog-content{\r\n    padding-block: 1vw;\r\n    padding-inline: 0.5vw;\r\n}\r\n\r\n.blog-content > div{\r\n    font-size: 1.5vw;\r\n    font-weight: bold;\r\n    color: rgb(41, 41, 41);\r\n\r\n    text-decoration: underline;\r\n}\r\n.blog-content > p{\r\n    font-size: 0.8vw;\r\n    color: rgb(41, 41, 41);\r\n\r\n    margin-block-start: 10px;\r\n}\r\n\r\n.blog-date{\r\n    text-decoration: underline;\r\n    margin-block-end: 20px;\r\n\r\n    font-size: 1vw;\r\n}\r\n\r\n.open-blog-button{\r\n    font-size: 1.1vw;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 4.5vw;\r\n    padding-block: 0.4vw;\r\n\r\n    text-decoration: none;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.open-blog-button:hover{\r\n    background-color: rgb(65, 65, 65);\r\n    color: rgb(255, 255, 255);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: rgb(200, 62, 62);\r\n    border: 0.3px solid rgb(200, 62, 62);\r\n    padding-inline: 5vw;\r\n    padding-block: 0.5vw;\r\n    margin-top: 3vw;\r\n    \r\n    transition: all 0.5s;\r\n}\r\n\r\n.delete-btn:hover{\r\n    cursor: pointer;\r\n    background-color: rgb(200, 62, 62);\r\n    color: white;\r\n}\r\n\r\n.book-show-delete-btn{\r\n    position: relative;\r\n    left: 41%;\r\n}\r\n\r\n.book-delete-btn{\r\n    margin-inline-start: 20px;\r\n}\r\n\r\n.book-delete-btn{\r\n    padding-inline: 4vw;\r\n    padding-block: 0.3vw;\r\n    margin-block: 20px;\r\n}\r\n\r\n.confirm-delete-box{\r\n    padding-inline: 0.7vw;\r\n    padding-block: 1vw;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 5vw;\r\n    left: 35vw;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    text-align: center;\r\n\r\n    box-shadow: 2px 1px 5px 1700px rgba(0, 0, 0, 0.588);\r\n    -webkit-box-shadow: 2px 1px 5px 1700px rgba(0, 0, 0, 0.588);\r\n    -moz-box-shadow: 2px 1px 5px 1700px rgba(0, 0, 0, 0.588);\r\n}\r\n\r\n/* .confirm-btns{\r\n    display: flex;\r\n    gap: 20px;\r\n} */\r\n\r\n.no-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: rgb(48, 48, 48);\r\n    border: 0.3px solid rgb(48, 48, 48);\r\n    padding-inline: 4.5vw;\r\n    padding-block: 0.3vw;\r\n}\r\n\r\n.no-btn:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n/* *******************Book Page********************* */\r\n\r\n.book-container{\r\n    padding-block: 2%;\r\n    padding-inline: 3%;\r\n}\r\n\r\n.book-text-image-flex-container{\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n.short-book-details > div{\r\n    margin-block-end: 2.5vw;\r\n}\r\n\r\n.short-book-details > p{\r\n    margin-block: 0.5vw;\r\n}\r\n\r\n.book-details{\r\n    white-space: pre-line;\r\n    text-align: justify;\r\n}\r\n\r\n.book-author,\r\n.book-date{\r\n    font-size: 0.9vw;\r\n    margin-block: 0.2vw;\r\n}\r\n\r\n.book-volume{\r\n    font-size: 1.3vw;\r\n    font-weight: 600;\r\n}\r\n\r\n.book-name{\r\n    font-weight: bold;\r\n    font-size: 2.5vw;\r\n}\r\n\r\n.book-image{\r\n    border: 0.5px solid black;\r\n    border-radius: 4px;\r\n    width: 13vw;\r\n}\r\n\r\n.summary-container{\r\n    margin-block: 1%;\r\n    padding-block: 1%;\r\n    padding-inline: 1.5%;\r\n\r\n    border: 0.5px solid black;\r\n    border-radius: 4px;\r\n}\r\n\r\n.summary-heading{\r\n    font-size: 2vw;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n\r\n    margin-block: 1vw;\r\n}\r\n\r\n/* *******************Blog Page********************* */\r\n\r\n.blogPage-container{\r\n    padding-block: 2%;\r\n    padding-inline: 3%;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.blogPage-name-heading{\r\n    font-size: 3vw;\r\n    font-weight: bold;\r\n\r\n    margin-block-end: 0.5vw;\r\n}\r\n\r\n.blogPage-date{\r\n    margin-block-end: 2vw;\r\n}\r\n\r\n.blogPage-image{\r\n    width: 60%;\r\n    margin-block-end: 2vw;\r\n\r\n    border: 0.3px solid black;\r\n    border-radius: 4px;\r\n\r\n    border-bottom: 0.5px solid black;\r\n}\r\n\r\n.blogPage-description{\r\n    text-align: left;\r\n}\r\n\r\n.description{\r\n    max-width: 500px !important;\r\n    background-color: red;\r\n}\r\n\r\n.blogPage-description > p{\r\n    \r\n    background-color: antiquewhite;\r\n\r\n    width: 1000px;\r\n}\r\n\r\n/* -------**********FOR THE RICH TEXT EDITOR**********---------- */\r\n\r\n.rich-text-editor-container{\r\n    padding-block: 1.5vw;\r\n    text-align: justify;\r\n\r\n    color: rgb(31, 31, 31);\r\n\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.rich-text-editor-container img{\r\n    position: relative;\r\n    width: 50vw;\r\n    left: 25%;\r\n}\r\n\r\n/* --------------------------------------------------------------- */",""]),n.Z=d},8377:function(r,n,o){o.r(n);var i=o(3379),e=o.n(i),t=o(7795),d=o.n(t),a=o(569),b=o.n(a),l=o(3565),p=o.n(l),g=o(9216),s=o.n(g),c=o(4589),x=o.n(c),u=o(1792),w={};w.styleTagTransform=x(),w.setAttributes=p(),w.insert=b().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=s(),e()(u.Z,w),n.default=u.Z&&u.Z.locals?u.Z.locals:void 0}}]);