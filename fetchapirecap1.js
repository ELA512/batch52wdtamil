// Callback
function isEven(num, cb) {
    setTimeout(() => {
      if (num % 2 === 0) {
        cb("Even");
      } else {
        cb("Odd");
      }
    }, 5000);
  }
  
  isEven(10, (res) => {
    console.log(res);
  });
  
  // Error First Callback
  function isEven(num, cb) {
    setTimeout(() => {
      if (num % 2 === 0) {
        cb(null, "Even");
      } else {
        cb("Odd");
      }
    }, 5000);
  }
  
  isEven(10, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
    }
  });
  
  // Object Based Callback
  function isEven(num, cb) {
    setTimeout(() => {
      if (num % 2 === 0) {
        cb({ status: "Success", message: "Even Number" });
      } else {
        cb({ status: "Error", error: "Odd Number" });
      }
    }, 5000);
  }
  
  isEven(10, ({ status, message, error }) => {
    if (status === "Success") {
      console.log(message);
    } else {
      console.error(error);
    }
  });
  
  // Array Based Callback
  function isEven(num, cb) {
    setTimeout(() => {
      if (num % 2 === 0) {
        cb([null, "Even"]);
      } else {
        cb(["Odd"]);
      }
    }, 5000);
  }
  
  isEven(3, ([err, res]) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
    }
  });
  
  // Function Based Callback
  function isEven(num, sucCb, errCb) {
    setTimeout(() => {
      if (num % 2 === 0) {
        sucCb("Even");
      } else {
        errCb("Odd");
      }
    }, 5000);
  }
  
  isEven(
    10,
    (res) => {
      console.log(res);
    },
    (err) => {
      console.error(err);
    }
  );
  
  function getUsers(sucCb, errCb) {
    fetch("https://www.mecallapi.com/api/users")
      .then((res) => {
        sucCb(res);
      })
      .catch((err) => {
        errCb(err);
      });
  }
  
  function getAttractions(sucCb, errCb) {
    fetch("https://www.mecallapi.com/api/attractions")
      .then((res) => {
        sucCb(res);
      })
      .catch((err) => {
        errCb(err);
      });
  }
  
  getUsers(
    (res1) => {
      console.log(res1);
      getAttractions(
        (res2) => {
          console.log(res2);
        },
        (err2) => {
          console.error(err2);
        }
      );
    },
    (err1) => {
      console.error(err1);
    }
  );