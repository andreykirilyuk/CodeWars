// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Answer
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

//would be easier to use replaceAll() but not all browsers support it, then don't need the
//regex global.