
var Compontents = {<% for (var i = 0; i < modules.length; i++) { %>
    <%= modules[i].name %> : {
        demos : {<% var demoNames = Object.keys(modules[i].demos);
            demoNames.forEach(function(demoName, idx){ %>
            <%=demoName%> : {
                compontent : require('<%=modules[i].demos[demoName].path%>'),
                code : '<%=modules[i].demos[demoName].content.replace(/[\r\n]/g, '\\n').replace(/\t/g, '  ')%>'
            }<%= (idx < demoNames.length - 1) ? "," : "" %><%})%>
        },
        readmes : {<% var readmeNames = Object.keys(modules[i].readmes);
            readmeNames.forEach(function(readmeName, idx){ %>
            <%=readmeName%> : '<%=modules[i].readmes[readmeName].replace(/\n/g, '\\n').replace(/\t/g, '  ')%>'<%= idx < readmeNames.length - 1 ? "," : "" %><%})%>
        }
    }<%= i < modules.length - 1 ? "," : "" %><% } %>
  };