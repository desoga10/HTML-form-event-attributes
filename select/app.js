function selected() {
  const highlighted = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  alert(`You Selected ${highlighted.length} Words`);
}