# st-lite · 社团分享体验站特化版（SillyTavern fork）

> Fork of [SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern) (AGPL-3.0)。
> 本分支 `st-pre-play` 在上游 v1.19.0 之上为「社团体验站」场景做了特化改造，
> 变更清单见 `git log st-pre-play --not main`；`main` 保持上游原样。

特化内容（详见各 commit）：
- `basePath` 子路径部署支持（nginx 剥前缀反代时整站可挂 `/play/` 等 URL 前缀）
- 公开自助注册（限流 + 账号总量帽 + 注册即登录；上游无此功能）
- 体验站预置：脚手架角色卡、Custom(OpenAI 兼容) 连接预设、假 API key（真 Key 由外部 playgate 代理持有）
- 烛光酒馆皮肤（全局 user.css：色板 + 面板减法 + 登录页品牌化）、中文兜底语言

---

# SillyTavern

LLM Frontend for Power Users

## Resources

- GitHub: <https://github.com/SillyTavern/SillyTavern>
- Docs: <https://docs.sillytavern.app/>
- Discord: <https://discord.gg/sillytavern>
- Reddit: <https://reddit.com/r/SillyTavernAI>

## License

AGPL-3.0
