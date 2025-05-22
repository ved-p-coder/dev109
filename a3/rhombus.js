// Individual functions for each section of the rhombus
function generateUpRight(height, oddColor, evenColor, symbol, startPosition) {
    let result = '';
    let position = startPosition;
    
    for (let i = 1; i <= height; i++) {
        let line = '';
        let spaces = height - i;
        let symbolsInRow = i;
        
        // Add leading spaces to center
        for (let j = 0; j < spaces; j++) {
            line += '&nbsp;';
        }
        
        // Add symbols for right half of top section
        for (let k = 0; k < symbolsInRow; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        result += line + '<br>';
    }
    
    return { html: result, endPosition: position };
}

function generateUpLeft(height, oddColor, evenColor, symbol, startPosition) {
    let result = '';
    let position = startPosition;
    
    for (let i = 1; i <= height; i++) {
        let line = '';
        let spaces = height - i;
        let symbolsInRow = i - 1;
        
        // Add leading spaces
        for (let j = 0; j < spaces; j++) {
            line += '&nbsp;';
        }
        
        // Add symbols for left half of top section
        for (let k = 0; k < symbolsInRow; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        result += line;
    }
    
    return { html: result, endPosition: position };
}

function generateDownLeft(height, oddColor, evenColor, symbol, startPosition) {
    let result = '';
    let position = startPosition;
    
    for (let i = height - 1; i >= 1; i--) {
        let line = '';
        let spaces = height - i;
        let symbolsInRow = i - 1;
        
        // Add leading spaces
        for (let j = 0; j < spaces; j++) {
            line += '&nbsp;';
        }
        
        // Add symbols for left half of bottom section
        for (let k = 0; k < symbolsInRow; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        result += line;
    }
    
    return { html: result, endPosition: position };
}

function generateDownRight(height, oddColor, evenColor, symbol, startPosition) {
    let result = '';
    let position = startPosition;
    
    for (let i = height - 1; i >= 1; i--) {
        let line = '';
        let spaces = height - i;
        let symbolsInRow = i;
        
        // Add leading spaces
        for (let j = 0; j < spaces; j++) {
            line += '&nbsp;';
        }
        
        // Add symbols for right half of bottom section
        for (let k = 0; k < symbolsInRow; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        result += line + '<br>';
    }
    
    return { html: result, endPosition: position };
}

function generateRhombusSections(height, oddColor, evenColor, symbol) {
    let result = '';
    let position = 1;
    
    // Generate each section and combine them
    for (let i = 1; i <= height; i++) {
        let line = '';
        let spaces = height - i;
        
        // Add leading spaces
        for (let j = 0; j < spaces; j++) {
            line += '&nbsp;';
        }
        
        // Left side (UpLeft section)
        for (let k = 0; k < i - 1; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        // Center symbol
        let color = (position % 2 === 1) ? oddColor : evenColor;
        line += `<span style="color: ${color};">${symbol}</span>`;
        position++;
        
        // Right side (UpRight section)
        for (let k = 0; k < i - 1; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        result += line + '<br>';
    }
    
    // Add tiny break between top and bottom halves
    result += '<span style="font-size: 4px;"><br></span>';
    
    // Bottom half
    for (let i = height - 1; i >= 1; i--) {
        let line = '';
        let spaces = height - i;
        
        // Add leading spaces
        for (let j = 0; j < spaces; j++) {
            line += '&nbsp;';
        }
        
        // Left side (DownLeft section)
        for (let k = 0; k < i - 1; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        // Center symbol
        let color = (position % 2 === 1) ? oddColor : evenColor;
        line += `<span style="color: ${color};">${symbol}</span>`;
        position++;
        
        // Right side (DownRight section)
        for (let k = 0; k < i - 1; k++) {
            let color = (position % 2 === 1) ? oddColor : evenColor;
            line += `<span style="color: ${color};">${symbol}</span>`;
            position++;
        }
        
        result += line + '<br>';
    }
    
    return result;
}

document.getElementById('rhombusForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.getElementById('height').value);
    const oddColor = document.getElementById('oddColor').value;
    const evenColor = document.getElementById('evenColor').value;
    const symbol = document.getElementById('symbol').value;
    
    const rhombusHTML = generateRhombusSections(height, oddColor, evenColor, symbol);
    document.getElementById('rhombusDisplay').innerHTML = rhombusHTML;
});
