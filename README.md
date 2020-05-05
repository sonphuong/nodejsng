# Giải thích cụ thể từng dòng, từng file trong project
## 1. app.json
app.json là file chứa thông tin như biến môi trường, add-ons và những thông tin cần thiết khác để chạy app trên heroku. 
Xét ví dụ:
<pre><code>
{
  "name": "frontend for ngscang",
  "description": "frontend for ngscang",
  "repository": "https://github.com/sonphuong/nggulp",
  "logo": "https://cdn.rawgit.com/heroku/node-js-getting-started/master/public/node.svg",
  "keywords": ["node", "express", "heroku"],
  "image": "heroku/nodejs"
}
</code></pre>
repository: (string, optional) chỉ ra đường dẫn sourcecode của app
logo: (string, optional) đường dẫn chỉ ra logo của app (format SVG, PNG, or JPG).
keywords: (array, optional) là một mảng string mô tả về app.
image: (string, optional) khai báo Docker image cho Heroku-Docker để build app.
Tất cả đều là optional nên nếu không có file này app vẫn chạy bình thường
## 2. Procfile 
## 3. scripts.json 
## 4. styles.json 
## 5. test.js 