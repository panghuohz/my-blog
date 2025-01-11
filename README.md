# AMENG Blog

## 技术栈

### Vite + Vue3 + Vue Router

```diff
- console.log('hello world');
+ async function main() {
+  const file = await remark()
+    .use(gfm)
+    .use(remarkRehype)
+    .use(rehypeHighlight)
+    .use(rehypeHighlightLines)
+    .use(rehypeStringify)
+    .process(await read("example.md"));
+ }
+ console.log('hello mdx');
```

v1 版本 预计上线时间 2 月 1 号
