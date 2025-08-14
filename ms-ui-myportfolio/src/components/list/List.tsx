export  const List: React.FC<List.ItemList> = (obj) => {
  
  const generateList = (items) => {

    let array = [];

    for(let x = 0; x < items.length; x++) {
      array.push(<a href={ items[x].url } key={`menu-list-${ x }`}>{ items[x].label }</a>);
    }

    return array;
  };

  return (
    <nav>      
      { generateList(obj.items) }
    </nav>
  );
};