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
  
  // Promise
  function isEven(num) {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve("Even");
      } else {
        reject("Odd");
      }
    });
  }
  
  isEven(2)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  
  function getUsers() {
    return fetch("https://www.mecallapi.com/api/users");
  }
  
  getUsers()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Guvi");
    }, 5000);
  });
  const promise2 = fetch("https://www.mecallapi.com/api/attractions");
  const promise3 = fetch("https://www.mecallapi.com/api/users");
  const promise4 = Promise.reject("Zen");
  const promise5 = Promise.resolve("Tamil");
  
  // Promise.all
  Promise.all([promise1, promise2, promise3, 1, promise4, promise5]).then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.error(err);
    }
  );
  
  // Promise.allSettled
  Promise.allSettled([promise1, promise2, promise3, 1, promise4, promise5]).then(
    (res) => {
      console.log(res);
    }
  );
  
  // Promise.any
  Promise.any([promise1, promise2, promise3, 1, promise4, promise5]).then(
    (res) => {
      console.log(res);
    }
  );
  
  // Promise.race
  Promise.race([promise1, promise2, promise3, 1, promise4, promise5]).then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.error(err);
    }
  );
  
  const getPost = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const getUser = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const getComments = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  
  getPost(1)
    .then((postRes) => {
      console.log("Post Response:", postRes);
      if (!postRes.ok) {
        throw new Error(`Cannot Fetch Post`);
      }
      return postRes.json();
    })
    .then((post) => {
      console.log("Post Data:", post);
      data.post = post;
      return getUser(post.userId);
    })
    .then((userRes) => {
      console.log("User Response:", userRes);
      if (!userRes.ok) {
        throw new Error(`Cannot Fetch User`);
      }
      return userRes.json();
    })
    .then((user) => {
      console.log("User Data:", user);
      data.user = user;
      return getComments(data.post.id);
    })
    .then((commentsRes) => {
      console.log("Comments Response:", commentsRes);
      if (!commentsRes.ok) {
        throw new Error(`Cannot Fetch Comments`);
      }
      return commentsRes.json();
    })
    .then((comments) => {
      console.log("Comments Data:", comments);
      data.comments = comments;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally((_) => {
      console.log("Completed");
      console.log(data);
    });
  
  const handleResponse = (response) => {
    console.log("Response:", response);
    if (!response.ok) {
      throw new Error(`Cannot Fetch`);
    }
    return response.json();
  };
  
  const data = {};
  getPost(1)
    .then(handleResponse)
    .then((post) => {
      console.log("Post Data:", post);
      data.post = post;
      return getUser(post.userId);
    })
    .then(handleResponse)
    .then((user) => {
      console.log("User Data:", user);
      data.user = user;
      return getComments(data.post.id);
    })
    .then(handleResponse)
    .then((comments) => {
      console.log("Comments Data:", comments);
      data.comments = comments;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally((_) => {
      console.log("Completed");
      console.log(data);
    });
  
  (async () => {
    try {
      const post = await getPostById(1);
      console.log("Post Data:", post);
  
      const user = await getUserById(post.userId);
      console.log("User Data:", user);
  
      const comments = await getAllCommentsByPostId(post.id);
      console.log("Comments Data:", comments);
  
      console.log({ post, user, comments });
    } catch (err) {
      console.error(err);
    }
  })();