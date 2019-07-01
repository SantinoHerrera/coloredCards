const styleCss = `
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.card{
  height: 15rem;
  width: 10rem;
  border-radius: 3rem;
  margin: 1rem 1rem;
  overflow: hidden;
  font-size: 10px;
  text-align: center;
  box-shadow: 1rem 1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.3);
  border: 3px solid black;
}
.card.card-black{
  color: white;
}`;

module.exports = styleCss;
