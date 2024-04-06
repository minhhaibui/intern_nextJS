# Test Dev Next.js

## Mô tả vấn đề

Trong file `config.test.ts` đang config như sau:

```js
export const isLogin = true;
export const canRoute = false;
```

Nếu như truy cập vào các route private thì hiện tại đang check quyền truy cập vào các route đó ở client. Vậy nên ở trên URL sẽ bị nhảy tới route private rồi mới redirect về trang profile.

Hãy giải quyết tất cả vấn đề có thể xảy ra liên quan đến URL.
