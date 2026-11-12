# Asset sources and licenses

## Existing media

The portrait and robot demonstration videos were already present in this
repository. `assets/img/research/teleoperation.webp`, `chemist.webp` and
`dual-sim.webp` are poster frames extracted from those videos.

`assets/img/research/phaseact.jpg` is the public sequential-manipulation poster
from https://github.com/cheng9911/PhaseAct-Website, reused for the owner’s project
portfolio. It shows real robot footage and the original project control panel.

## Fonts

Hanken Grotesk and Newsreader are from the Google Fonts source repository:
https://github.com/google/fonts/tree/main/ofl/hankengrotesk
https://github.com/google/fonts/tree/main/ofl/newsreader

Unmodified variable TTF files and their SIL Open Font Licenses are distributed
in `assets/fonts/`. Chinese glyphs use the visitor's installed CJK fonts.

## Talon rendering

`assets/img/research/talon-front.webp` is the existing model rendering from
https://github.com/rocos-sia/rocos-web. The upstream attribution follows.
No Three.js runtime or model files are copied into this website.

# 素材与第三方许可

## Talon 实际机器人模型

- 来源：[rocos-sia/rocos-app](https://github.com/rocos-sia/rocos-app/tree/93a39b586373761f2dd9ad4a277051664f7b952c/config/robots/talon)
- 固定参考提交：`93a39b586373761f2dd9ad4a277051664f7b952c`
- `public/models/talon/source.urdf` 是上游 `config/robots/talon/robot.urdf` 的逐字节副本。
- `public/models/talon/*.STL` 是上游 `config/robots/talon/meshes/*.STL` 的逐字节副本。
- 上游根 README 声明 MIT，版权行为 `Copyright (c) 2021 'Yang Luo, luoyang@sia.cn'`；模型目录内未发现单独许可证。保留该声明及 MIT 全文如下。本说明不声称另有独立模型授权或品牌商标授权。
- `public/images/talon-{front,side,detail}.webp` 由这些网格在本项目 Three.js 中渲染；材质、灯光和预设姿态属于展示设置，不是实机照片或仿真反馈。
- 校验值保存在 `public/models/talon/SHA256SUMS`。

Copyright (c) 2021 'Yang Luo, luoyang@sia.cn'

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
