(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(41)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),s=a.n(r),l=(a(26),a(14)),c=a(15),i=a(18),u=a(16),m=a(19),h=(a(27),a(10)),b=a.n(h),d=a(17),f=a.n(d),y=a(8),k=a.n(y),v=a(6),g=a.n(v),p=(a(28),function(e){var t=e.books;return 0===Object.keys(t).length?o.a.createElement("div",null,e.message):o.a.createElement("div",{className:"book-cards"},t.filter(function(e){return e.volumeInfo.imageLinks}).reverse().map(function(e){return o.a.createElement(g.a,{className:"book-card",key:e.id},o.a.createElement(g.a.Img,{className:"book-card-image",variant:"top",alt:e.volumeInfo.title,src:e.volumeInfo.imageLinks.smallThumbnail}),o.a.createElement(g.a.Body,{className:"book-card-body"},o.a.createElement(g.a.Title,{className:"book-card-title"},e.volumeInfo.title),o.a.createElement(g.a.Text,{className:"book-card-text"},"By:  ",e.volumeInfo.authors),o.a.createElement(g.a.Text,{className:"book-card-text"},"Published By:  ",e.volumeInfo.publisher),o.a.createElement(k.a,{href:e.volumeInfo.canonicalVolumeLink,target:"_blank",variant:"info"},"Details")))}))}),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",books:{},message:"Nothing to show yet. Try searching for a book by title!"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({query:e,books:{},message:"Nothing to show yet. Try searching for a book by title!"})}},{key:"enterPressed",value:function(e){13===(e.keyCode||e.which)&&this.handleSearch()}},{key:"handleSearch",value:function(){var e=this,t=this.state.query;fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:"+t+"&orderBy=newest&printType=books&&maxResults=20",{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(t.items){var a=t.items;e.setState({books:a})}else e.setState({message:"Could not find any book by that title! Try again"})}).catch(function(t){e.setState({message:"There seems to be a problem. Please check your connection and try again."})})}},{key:"render",value:function(){var e=this,t=""!==this.state.query,a=this.state,n=a.books,r=a.message;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"BOOK FINDER")),o.a.createElement("main",null,o.a.createElement(b.a,null,o.a.createElement(f.a,{type:"search",placeholder:"Search by book name",onChange:function(t){return e.handleChange(t.target.value)},onKeyPress:function(t){return e.enterPressed(t)},value:this.state.query}),o.a.createElement(b.a.Append,null,o.a.createElement(k.a,{disabled:!t,variant:"info",onClick:function(){return e.handleSearch()}},"Search"))),o.a.createElement("br",null),o.a.createElement(p,{books:n,message:r})))}}]),t}(n.Component);s.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7dcbca76.chunk.js.map