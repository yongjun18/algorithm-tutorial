import SegCanvas from '../Canvases/SegCanvas';
import GrahamCanvas from '../Canvases/GrahamCanvas';
import DfsCanvas from '../Canvases/DfsCanvas';
import StackCanvas from '../Canvases/StackCanvas';

const seg = {
  pathname: "/algorithms/contents/seg",
  title: 'Segment Tree',
  description: [
    '세그먼트 트리(Segment Tree)란 각 노드가 구간에 대한 정보를 저장하는 자료구조를 말합니다. 루트 노드는 전체 구간에 대한 정보를 저장하고 있고, 각 노드는 자신의 구간을 절반씩 나눠가지는 자식을 2개 가지게 됩니다.',
    '세그먼트 트리를 이용하면, 배열 등의 선형 구조에서 구간 쿼리, 점 업데이트 연산을 빠르게 해결할 수 있습니다. 배열의 크기가 n이라면, 구간 쿼리와 점 업데이트 모두 O(logN) 만에 해결합니다. 또한 Lazy Propagation을 활용한다면 구간 업데이트 또한 O(logN) 만에 해결할 수 있습니다.'
  ],
  canvasDesc: [
    '가장 아래쪽에 위치한 사각형 8개 중 하나를 클릭해 주세요. 클릭한 사각형에 해당하는 숫자가 1 증가합니다.',
    '나머지 사각형들은 구간에 대한 합을 가지고 있습니다. 숫자를 1 증가시키면, 그 숫자를 포함하고 있는 사각형의 값 또한 1 증가합니다.',
  ],
  canvas: <SegCanvas/>,
};
const aho = {
  pathname: "/algorithms/contents/aho",
  title: 'Aho-Corasick',
  description: [
    '청춘의 풀이 이는 귀는 그들의 노년에게서 운다. 인생을 오아이스도 간에 스며들어 때에, 지혜는 것이다. 구할 싸인 싹이 위하여서 어디 무엇이 광야에서 따뜻한 아름다우냐? 있는 청춘의 이상 용감하고 있는가? 천하를 예가 날카로우나 아름답고 인도하겠다는 철환하였는가? 소리다.이것은 것은 싶이 피에 커다란 용기가 밥을 뭇 있다.',
    '설산에서 청춘을 그것은 관현악이며, 어디 것이다. 청춘의 용감하고 그들의 뿐이다. 시들어 얼음에 놀이 고동을 못할 풀이 것이다. 산야에 그들에게 날카로우나 귀는 바이며, 인생을 위하여서. 낙원을 현저하게 있는 그들에게 듣는다. 목숨이 같은 새 청춘에서만 찾아 그들은 피고 봄바람이다. 이 굳세게 바이며, 그들에게 웅대한 없으면, 천지는 듣는다. 그들은 공자는 놀이 아름다우냐?'
  ],
  canvasDesc: [
    '청춘의 풀이 이는 귀는 그들의 노년에게서 운다. 인생을 오아이스도 간에 스며들어 때에, 지혜는 것이다. 구할 싸인 싹이 위하여서 어디 무엇이 광야에서 따뜻한 아름다우냐? 있는 청춘의 이상 용감하고 있는가? 천하를 예가 날카로우나 아름답고 인도하겠다는 철환하였는가? 소리다.이것은 것은 싶이 피에 커다란 용기가 밥을 뭇 있다.',
  ],
  canvas: <SegCanvas/>,
};
const dfs = {
  pathname: "/algorithms/contents/dfs",
  title: 'DFS',
  description: [
    '깊이 우선 탐색(Depth-First Search)이란 그래프를 탐색하는 알고리즘 중 하나로, 탐색 시 방문할 수 있는 가장 깊은 정점까지 방문한 후, 막힐 경우 되돌아와 다른 정점을 방문하는 알고리즘입니다. 일반적으로 재귀 호출이나 스택을 이용해서 구현합니다.',
  ],
  canvasDesc: [
    '하나의 점을 선택해 주세요.',
    '선택된 점을 시작점으로 하여, 모든 점을 탐색합니다. 그리고 그 과정을 그림으로 보여줍니다.',
  ],
  canvas: <DfsCanvas/>,
};
const graham = {
  pathname: "/algorithms/contents/graham",
  title: 'Graham Scan',
  description: [
    '그라함 스캔(Graham Scan)은 컨벡스헐(Convex Hull)을 구할 수 있는 대표적인 알고리즘입니다. 컨벡스헐이란 2차원 평면 상에 여러 점이 있을 때, 그중 일부를 골라 모든 점을 포함하도록 만든 볼록 다각형입니다. 컨벡스헐을 이용하면, 좌표 평면 위의 점들 중 가장 멀리 떨어져 있는 두 점을 빠르게 구할 수 있습니다.',
    '그라함 스캔의 동작 방법은 이렇습니다. 먼저 컨벡스헐에 반드시 포함되는 점 하나를 기준점으로 정합니다. 보통 가장 아래의 점들 중 가장 왼쪽의 점을 기준점으로 설정합니다. 그 후 다른 점들을 기준점 기준으로, 반시계 방향으로 정렬합니다. 정렬된 점을 하나씩 보면서 집합에 점을 추가합니다. 그런데 만약 추가 직전에, 추가할 점에 의해 오목한 각이 형성되면, 오목한 각이 사라질 때까지 최근에 추가했던 점부터 집합에서 제거합니다. 모든 점들을 업데이트 한 후 집합에 남아있는 점들은 컨벡스헐을 이룹니다.'
  ],
  canvasDesc: [
    '중복 없이 10개의 점을 선택해 주세요.',
    '선택이 끝나면 자동으로 컨벡스헐을 찾고, 그 과정을 그림으로 보여줍니다.',
  ],
  canvas: <GrahamCanvas/>,
};
const stack = {
  pathname: "/algorithms/contents/stack",
  title: 'Stack',
  description: [
    '스택(Stack)은 후입선출(Last In First Out)의 특성을 가지는 선형 자료구조입니다. 후입선출이란, 말 그대로 가장 마지막에 들어간 원소가 가장 먼저 나오는 특징을 말합니다.',
    '보통 top이라고 부르는 한쪽 끝에서만 삽입, 삭제가 이루어지며, 삽입과 삭제에 O(1)의 시간이 걸립니다.',
    '스택은 dfs, 올바른 괄호 문자열 판단 등에서 사용됩니다.',
  ],
  canvasDesc: [
    '마음에 장난감들을 하나씩 눌러주세요. 누른 순서대로 스택에 추가됩니다.',
    'POP 버튼을 눌러 스택에서 장난감을 제거해주세요. 스택 최상단에 위치한 장난감부터 제거됩니다.'
  ],
  canvas: <StackCanvas/>,
};
const notFound = {
  pathname: "/algorithms/contents/",
  title: 'Not Found',
  description: [
    '청춘의 풀이 이는 귀는 그들의 노년에게서 운다. 인생을 오아이스도 간에 스며들어 때에, 지혜는 것이다. 구할 싸인 싹이 위하여서 어디 무엇이 광야에서 따뜻한 아름다우냐? 있는 청춘의 이상 용감하고 있는가? 천하를 예가 날카로우나 아름답고 인도하겠다는 철환하였는가? 소리다.이것은 것은 싶이 피에 커다란 용기가 밥을 뭇 있다.',
    '설산에서 청춘을 그것은 관현악이며, 어디 것이다. 청춘의 용감하고 그들의 뿐이다. 시들어 얼음에 놀이 고동을 못할 풀이 것이다. 산야에 그들에게 날카로우나 귀는 바이며, 인생을 위하여서. 낙원을 현저하게 있는 그들에게 듣는다. 목숨이 같은 새 청춘에서만 찾아 그들은 피고 봄바람이다. 이 굳세게 바이며, 그들에게 웅대한 없으면, 천지는 듣는다. 그들은 공자는 놀이 아름다우냐?'
  ],
  canvasDesc: [
    '청춘의 풀이 이는 귀는 그들의 노년에게서 운다. 인생을 오아이스도 간에 스며들어 때에, 지혜는 것이다. 구할 싸인 싹이 위하여서 어디 무엇이 광야에서 따뜻한 아름다우냐? 있는 청춘의 이상 용감하고 있는가? 천하를 예가 날카로우나 아름답고 인도하겠다는 철환하였는가? 소리다.이것은 것은 싶이 피에 커다란 용기가 밥을 뭇 있다.',
  ],
  canvas: <div/>,
}

function useAlgorithms() {
  return {
    seg: seg,
    aho: aho,
    dfs: dfs,
    stack: stack,
    graham: graham,
    isShowingAlgorithm: function(pathname){
      return (pathname.substr(0, 21) == "/algorithms/contents/");
    },
    getAlgorithm: function(pathname){
      let name = pathname.substr(21, pathname.length);
      if (this.hasOwnProperty(name)){
        return this[name];
      }
      else return notFound;
    }
  };
};

export { useAlgorithms };
