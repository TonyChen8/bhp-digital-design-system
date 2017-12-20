import classnames from 'classnames';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import downloadFiles from '../downloads';

import s from './download.module.scss';

export default () => {
  return (
    <div>
      <Breadcrumbs
        slug='download'
        title='Download'
      />

      <div className='container'>
        <h3 className={s.pageHeader}>
          Download legacy images
        </h3>

        <p>
          Search our curated library of logos and icons that have been created for previous BHP Projects.
        </p>

        <div className='d-flex flex-wrap'>
          {downloadFiles.map(({ name, src }) =>
            <div
              key={name}
              className={s.downloadFile}
            >
              <div className={s.downloadImage}>
                <img src={src} />
              </div>

              <div className={classnames(s.downloadName, 'd-flex align-items-center justify-content-between p-2')}>
                {name}

                <a href={src} download={name}>
                  <i className='material-icons md-24 align-top'>file_download</i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
