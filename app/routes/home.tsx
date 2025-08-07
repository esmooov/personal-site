import type { Route } from "./+types/home";
import { Outlet, useParams } from "react-router";
import styled from "styled-components";

const MainPage = styled.div`
  font-family: "lores-15", sans-serif;
  font-weight: 700;
  font-style: normal;
  padding: 40px;

  h1 {
    font-size: 62px;
  }
  
`

const InnerPage = styled.div`
  border: 3px double black;
  min-height: calc(100vh - 80px);
  padding: 20px 40px;
  display: flex;
`

const LinkBar = styled.div`
  display: flex;
  gap: 8px;
  font-family: lores-21-serif, sans-serif;
  font-weight: 400;
  padding-bottom: 8px;
  font-size: 28px;

  a {
    display: flex;
    flex-grow: 1;
    justify-content: center;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`

const Items = styled.div`
  border: 4px groove gray;
  padding: 10px;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  width: 50%;
  padding: 20px
`

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Erik Hinton's WebHome" },
    { name: "description", content: "Welcome to my internet!" },
  ];
}

type ItemEntry = {
  name: string,
  path: string
}

const Files: Record<string, Array<ItemEntry>> = {
  "": [],
  "writing": [
    {name: "Foo Bar", path: "foo"}
  ]
}

const Item = ({name, path, subpage}: ItemEntry & {subpage?: string}) => {
  return (
    <a href={`/${subpage}/${path}`}>
      {name}
    </a>
  )
}

export default function Home() {
  const {subpage} = useParams()
  const files = Files[subpage || ""] || [];
  return <MainPage>
    <InnerPage>
      <Left>
        <h1>
          <div>
            erik hinton
          </div>
        </h1>
        <LinkBar>
          <a href="/writing">
            <div>
              <p>Writing</p>
            </div> 
          </a>
          <a href="/print">
            <div>
              <p>Print</p>
            </div> 
          </a>
          <a href="#">
            <div>
              <p>Events</p>
            </div> 
          </a>
          <a href="#">
            <div>
              <p>Misc.</p>
            </div> 
          </a>
        </LinkBar>
        <Items>
          {files.map(f => <Item key={f.name} name={f.name} path={f.path} subpage={subpage} />)}
        </Items>
      </Left>
      <Right>
        <Outlet/>
      </Right>
    </InnerPage>
  </MainPage>
}
