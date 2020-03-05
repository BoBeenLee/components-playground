# components-playground

![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg?style=flat-square)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/barbajs/barba/blob/master/LICENSE)

## 📖 Introduction

- 앱, 웹 기반 컴포넌트를 플레이그라운드에 제작하기 위함.

## Storybook

- https://bobeenlee.github.io/components-playground/

## 📂 Directory structure

    packages
    ├── shared
    ├──── lib
    ├─────── components
    ├─────── hocs
    ├─────── hooks
    ├─────── images
    ├─────── stores
    ├────────── model
    ├─────── styles
    ├─────── utils
    ├──── storybook
    ├──── typings
    ├── web
    ├──── .storybook       # storybook 환경설정
    ├──── modules          # react-native-web 설정 (styled-components를 사용하기 위함)
    ├──── src
    ├─────── components
    ├─────── images
    ├─────── pages         # page 단위
    ├─────── styles
    ├─────── utils
    ├─────── html.tsx      # generate html
    ├──── static           # static 파일들
    ├──── typings          # global 타입 정의
    ├──── gatsby-browser
    ├──── gatsby-config
    ├──── metadata         # 메타데이터 정의
    └── README.md

## 🌇 Getting Started

### prepare

```sh
npm install
```

### Web

```sh
cd packages/web
npm run start:staging
```

## [Commit Convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
