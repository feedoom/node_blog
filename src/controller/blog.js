const xss = require("xss");
const { exec } = require("../db/mysql");

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title，content属性
  // const { title, content, author } = blogData;
  const title = xss(blogData.title);
  const content = xss(blogData.content);
  const author = xss(blogData.author);
  const createTime = Date.now();

  const sql = `insert into blogs (title,content,createtime,author) values ('${title}', '${content}', ${createTime}, '${author}');`;
  return exec(sql).then((insertData) => {
    // console.log(insertData);
    return {
      id: insertData.insertId,
    };
  });
  // return {
  //   id: 3,
  // };
};

const updateBlog = (id, blogData = {}) => {
  const { title, content } = blogData;
  const sql = `update blogs set title='${title}',content='${content}' where id=${id}`;
  return exec(sql).then((updateData) => {
    // console.log(updateData);
    return updateData.affectedRows > 0;
  });
  // return true;
};

const delBlog = (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}'`;
  return exec(sql).then((delData) => {
    return delData.affectedRows > 0;
  });
  // id 为要删除博客的 id
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
