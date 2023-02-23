using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorldCitiesAPI.Data.Models
{
    public class Country
    {
        #region Properties

        /// <summary>
        /// Unique id and primary key for this country
        /// </summary>
        [Key]
        [Required]
        public int Id { get; set; }

        /// <summary>
        /// Country name (UTF8)
        /// </summary>
        public string Name { get; set; } = null!;

        /// <summary>
        /// Country code (ISO 3166-1 ALPHA-2 format)
        /// </summary>
        public string ISO2 { get; set; } = null!;

        /// <summary>
        /// Country code (ISO 3166-1 ALPHA-3 format)
        /// </summary>
        public string ISO3 { get; set; } = null!;

        #endregion

        #region Navigation Properties
        /// <summary>
        /// A collection of all cities related to this country
        /// </summary>
        public ICollection<City>? Cities { get; set; } = null!;
        #endregion
    }
}