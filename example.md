---
author: Ace Lee
---

# markdown ����
---
# ���⣨Headings�� {#headings}
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6

## ��ѡ�﷨ {#headings-option}
Heading level 1
===============
Heading level 2
---------------
> ��������� h1 ��h2�������С��ͬ

# ���䣨Paragraphs��
ʹ�ÿհ��н�һ�л�����ı����зָ���
> ���ֽ���������Ҫ�հ���

## ���У�Line Breaks��
��һ�е�ĩβ������������ո�Ȼ�󰴻س�����return�������ɴ���һ�����У�line break�� (\&lt;br\&gt;)��

# ǿ����Emphasis��
## ���壨Bold��
�ڵ��ʻ�����ǰ�����ӣ�
- ���� �����Ǻţ�**asterisks**�����»��ߣ� __underscores__ ��
- б�� һ���Ǻţ�*asterisks*�����»��ߣ� _underscores_ ��
- ��б�� �����Ǻţ�***asterisks***�����»��ߣ� ___underscores___ ��

> �������������ʱ����Ҫʹ���Ǻš�

# �����ã�Blockquotes��
> ����
>> Ƕ������

# �б�Lists��
1. ʹ�����ֺ�Ӣ�ľ�ſ�ͷ
2. ���ֿ��Բ�����
3. ����Ҳ������ͬ
4. ����

- ʹ�ú��ߣ�-�����Ǻţ�*�����Ӻţ�+��
- ����Ҫ���ʹ��
- 1949\. �������

> ��������б������ֿ�ͷ�������ֺ����Ӣ�ľ�ţ���Ҫʹ�÷�б��(\\)�����ת��

- ��������
  �ڶ���
- Ϊ�˱����б���������������ж���ʱ����Ҫ���4���ո񣨲��ֽ���������������һ��tab
    <html>
      <head>
        <title>Test</title>
      </head>
    </html>
- Ƕ��������Ҫ���8���ո��������tab��
  ![Tux, the Linux mascot](https://www.markdown.xyz/assets/images/tux.png)
- ͼƬ�Ͷ������ƣ���Ҫ���4���ո����һ��tab

# ����
���ڴ��룬ʹ��һ�������ţ�\`��������`code`
����������з����ţ�ʹ�����������Ű�����`` `code` with backquot``������Ҫ������һ��

    �����ʹ��4���ո����һ��tab������
    ��ȷ�������ǰ�����һ������
    ����ʹ��Χ��ʽ����

```
Χ��ʽ�����
ʹ�����������ţ��������������ߣ�ǰ���ʹ��һ�а��������
�ŵ��ǿ��Լ�������
```

# ���Tables��

|align left|align center| align right|
|:---|:---:|---:|
|1||\$160|
|3|>|\$12|
|5|6||
|^|7|\$1|

# �����б�Task Lists��

- [x] meta��������
- [x] ���ú�Ĭ������
- [x] �������Ϳ���ύ
- [x] 302��ת����
- [ ] ������У��ڴ�:heavy_check_mark:��redis:heavy_check_mark:��mongodb��
- [ ] ����ͳ��
- [x] ~~���߳�~~��ʹ��curlmulti
- [x] �����ͬ��������ʱ����
- [ ] ~~pipe item~~��̫�鷳����֧��

# ͼ��
```mermaid
graph LR
	A --- B
	B-->C[fa:fa-ban forbidden]
	B-->D[fa:fa-spinner ok];
```

```graphviz
digraph hierarchy {
  nodesep=1.0 // Increases the separation between nodes

  node [color=Red,fontname=Courier,shape=box] // All nodes will this shape and colour
  edge [color=Blue, style=dashed] // All the lines look like this

  Headteacher->{Deputy1 Deputy2 BusinessManager}
  Deputy1->{Teacher1 Teacher2}
  BusinessManager->ITManager
  {rank=same;ITManager Teacher1 Teacher2} // Put them on the same level
}
```

# emoj
����ȥ���︴�� [emojipedia](https://emojipedia.org/random/)

# slide
��ʱѡ��[impress.js](https://github.com/impress/impress.js)

# katex ����
---
���ڴ���$ x $

$$ e^{i \pi} + 1 = 0. $$
$$ \frac{k^3}{2} - k^2 + ck - 1 = 0 $$

$$ \begin{aligned}
e^{i \pi} + 1 &= 0. \\
e^{ix} &= \cos x + i \sin x.
\end{aligned}
$$
> ��ʽ����ͻ���

$$\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}	\nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\\\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\\\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}$$
> �������ͻ���

$$
\frac{\partial ^{2} T}{\partial x^{2}}
\frac{ y^{'} }{ x^{'} }
$$
$$
\begin{equation}
\tag{1.5} (x^n){'} = n * x ^{n-1}
\end{equation}
$$
$$
\begin{equation}
\begin{split}
\frac{ y^{'} }{ x^{'} } \\
(x^n){'} = n * x ^{n-1} \\
\frac{\partial ^{2} T}{\partial x^{2}} = 1
\end{split}
\end{equation}
$$

$$
\begin{align}
\frac{\partial ^{2} T}{\partial x^{2}} = 1 \\
\frac{ y^{'} }{ x^{'} }
\end{align}
$$


# �Զ�����չ����
---
### ע��

����һ��ע��[^ע��1]

[^ע��1]: ������ʾһ�λ�