import React from 'react'
import s from './style.module.css';
import MaterialDesignIcon from '../library/MaterialDesignIcon';
import downloadImageLinksData from '../data/DownloadPage';
import ReactPaginate from 'react-paginate';


class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this.downloadImageLinksData = downloadImageLinksData
    this.renderImageContainer = this.renderImageContainer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  
  renderImageContainer({name, img},index) {
    return(
      <div className={s.downloadImageContainer} key={index}>
        <div className={s.imageContainer}>
          <img src={img} className={s.downloadImage}/>
        </div>
        <div className={s.footerOfdownloadImageContainer}>
          {name}
          <a href={img} download={name}><MaterialDesignIcon name='file_download' color='#353544' className={s.materialDesignIcon}/></a>
        </div>
      </div>
    )
  }
  
  handlePageClick(data) {
    this.setState({currentPage: data.selected +1});
  }
  
  
  render() {
    var totalImages = _.size(this.downloadImageLinksData);
    return (
      <div className='pageContainerGlobalClass'>
        <div className='pageMainContentGlobalClass'>
          <p className='pageTitleGlobalClass'>Download legacy images</p>
          <p>
            Search our curated library of logos and icons that have been created for previous BHP Projects.
          </p>
          <div className={s.paginationContainer}>
            <div className={s.paginationText}>
              {((this.state.currentPage - 1) * 20) + 1} - {(this.state.currentPage * 20) > totalImages? totalImages : (this.state.currentPage * 20)} of {totalImages}
            </div>
            <div className={s.paginationBar}>
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={<a href="">...</a>}
                breakClassName={s.break}
                pageCount={totalImages/20}
                marginPagesDisplayed={0}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={s.pagination}
                subContainerClassName={'pages pagination'}
                activeClassName={s.active}
                forcePage={this.state.currentPage - 1}
              />
            </div>
          </div>
          <div className={s.pageDownloadImageContainer}>
            {_.map(_.slice(this.downloadImageLinksData,((this.state.currentPage -1) * 20),((this.state.currentPage) * 20)), this.renderImageContainer)}
          </div>
          <div className={s.paginationContainer}>
            <div className={s.paginationText}>
              {((this.state.currentPage - 1) * 20) + 1} - {(this.state.currentPage * 20) > totalImages? totalImages : (this.state.currentPage * 20)} of {totalImages}
            </div>
            <div className={s.paginationBar}>
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={<a href="">...</a>}
                breakClassName={s.break}
                pageCount={totalImages/20}
                marginPagesDisplayed={0}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={s.pagination}
                subContainerClassName={'pages pagination'}
                activeClassName={s.active}
                forcePage={this.state.currentPage - 1}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Download
