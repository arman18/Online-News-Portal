using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Server.Controllers
{
    public class NewsController:Controller
    {
        private readonly NewsRepository _newsRepository = new NewsRepository();


        [HttpGet("api/News/{id}")]
        public IActionResult GetNews(int id)
        {
            return Ok(_newsRepository.GetNews(id));
        }
        [HttpGet("api/News")]
        public IActionResult GetNews()
        {
            return Ok(_newsRepository.GetNews());
        }
        [HttpPost("api/Add/news")]
        public IActionResult Add([FromBody] News news)
        {
            return Ok(_newsRepository.Add(news));
        }
        [HttpPost("api/Update/news")]
        public IActionResult Update([FromBody] News news)
        {
            return Ok(_newsRepository.Update(news));
        }
        [HttpGet("api/Delete/News/{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_newsRepository.Delete(id));
        }
        [HttpPost("api/AddComment/news")]
        public IActionResult AddComment([FromBody] Comment coment)
        {
            return Ok(_newsRepository.AddComment(coment));
        }
        [HttpGet("api/GetAllComment/news/{postId}")]
        public IActionResult GetAllComment(int postId)
        {
            return Ok(_newsRepository.GetComment(postId));
        }
    }
}
