const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  console.log(numberOfPages);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    console.log(start, index);
    return followers.slice(start, start + itemsPerPage);
  });
  // console.log(followers, newFollowers);
  return newFollowers;
};

export default paginate;
