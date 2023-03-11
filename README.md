# ![Version](https://img.shields.io/badge/version-1.0.1-green.svg)

## 安装

```
npm install lite-ts-ioc
```

## 使用

```typescript
import { get,set } from 'lite-ts-ioc';

// 容器内容实例化
const rpc = new AjaxRpc();
set(RpcBase,rpc);

// 获取容器内容
const rpc = get<RpcBase>(rpc);
```

