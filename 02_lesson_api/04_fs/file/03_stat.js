const fs = require('fs');

fs.stat('./newText',(err,stats) => {
    if(err){
        console.log('文件不存在');
        return;
    }

    console.log(stats);//文件信息
    //是否是文件夹
    console.log(stats.isDirectory()); //false
    //是否是文件
    console.log(stats.isFile()); //true
});

/**
 Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 8605554318,
  size: 6,
  blocks: 8,
  atimeMs: 1541470592171.699,
  mtimeMs: 1541470589539.1973,
  ctimeMs: 1541470589539.1973,
  birthtimeMs: 1541470437917.2236,
  atime: 2018-11-06T02:16:32.172Z,
  mtime: 2018-11-06T02:16:29.539Z,
  ctime: 2018-11-06T02:16:29.539Z,
  birthtime: 2018-11-06T02:13:57.917Z } 
 
 */