function showReadmore() {
    document.getElementById('readmore').style.display = 'block';
}

function showAvail() {
    document.getElementById('avail').style.display = 'block';
    document.getElementById('readmore').style.display = 'none';
}

function hideAvail() {
    document.getElementById('avail').style.display = 'none';
    document.getElementById('readmore').style.display = 'block';
  }