// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages
function paperwork(n, m) {
    if( n < 0 || m < 0 ) {
        return 0 
    } else {
        return n * m 
    }
}

// OR 
function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m; 
}
