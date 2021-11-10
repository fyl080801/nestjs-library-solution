export const getCallerFile = () => {
  let filename: string;

  const pst = Error.prepareStackTrace;

  Error.prepareStackTrace = (err, stack) => {
    return stack;
  };

  return (err: Error) => {
    try {
      let callerFile;

      const currentFile = (<NodeJS.CallSite[]>(err.stack as unknown))
        .shift()
        .getFileName();

      while (err.stack.length) {
        callerFile = (<NodeJS.CallSite[]>(err.stack as unknown))
          .shift()
          .getFileName();

        if (currentFile !== callerFile) {
          filename = callerFile;

          break;
        }
      }
    } catch (err) {}

    Error.prepareStackTrace = pst;

    return filename;
  };
};
